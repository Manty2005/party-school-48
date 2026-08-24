(function(){
  const PENDING='party48_pending_email';
  const $=id=>document.getElementById(id);
  function toast2(s){ if(typeof toast==='function') return toast(s); alert(s); }
  function errMsg(j,status){return j?.message||j?.msg||j?.error_description||j?.hint||('HTTP '+status)}

  async function sendOtpCode(){
    const email=$('email')?.value.trim();
    if(!email)return toast2('请先输入邮箱');
    const btn=$('loginBtn');
    if(btn){btn.disabled=true;btn.textContent='正在发送…'}
    try{
      const r=await fetch(URL+'/auth/v1/otp',{
        method:'POST',
        headers:{'apikey':KEY,'Content-Type':'application/json'},
        body:JSON.stringify({email,create_user:true})
      });
      const j=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(errMsg(j,r.status));
      localStorage.setItem(PENDING,email);
      showOtp(email);
      toast2('验证码已发送，请查收邮箱');
    }catch(e){toast2('发送失败：'+(e.message||e))}
    finally{if(btn){btn.disabled=false;btn.textContent='重新发送验证码'}}
  }

  async function verifyOtpCode(){
    const email=$('email')?.value.trim();
    const token=$('otpCode')?.value.trim().replace(/\s/g,'');
    if(!email)return toast2('请先输入邮箱');
    if(!token)return toast2('请输入邮箱验证码');
    const btn=$('verifyOtpBtn');
    if(btn){btn.disabled=true;btn.textContent='正在验证…'}
    try{
      const r=await fetch(URL+'/auth/v1/verify',{
        method:'POST',
        headers:{'apikey':KEY,'Content-Type':'application/json'},
        body:JSON.stringify({email,token,type:'email'})
      });
      const j=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(errMsg(j,r.status));
      const sess={...j,user:j.user};
      localStorage.setItem('party48_supabase_session_v1',JSON.stringify(sess));
      localStorage.removeItem(PENDING);
      user=j.user||null;
      if(typeof authUI==='function')await authUI();
      toast2('登录成功，云同步已开启');
    }catch(e){toast2('验证码无效：'+(e.message||e))}
    finally{if(btn){btn.disabled=false;btn.textContent='验证并登录'}}
  }

  function showOtp(email){
    let box=$('otpBox2');
    if(!box){
      box=document.createElement('div');
      box.id='otpBox2';
      box.className='row';
      box.style.width='100%';
      box.style.marginTop='8px';
      box.innerHTML='<input id="otpCode" inputmode="numeric" autocomplete="one-time-code" placeholder="输入邮箱验证码" style="min-width:180px"><button id="verifyOtpBtn" class="primary">验证并登录</button>';
      $('loginBox')?.appendChild(box);
      $('verifyOtpBtn').onclick=verifyOtpCode;
    }
    box.classList.remove('hidden');
    if(email && $('email'))$('email').value=email;
    if($('accountText'))$('accountText').textContent='验证码已发送到 '+email+'。请留在 App 内，查看邮件后回来输入验证码。';
  }

  function patchUI(){
    const btn=$('loginBtn');
    if(btn){btn.textContent='发送验证码';btn.onclick=sendOtpCode;btn.removeAttribute('onclick')}
    if($('accountText') && !user)$('accountText').textContent='使用邮箱验证码登录，不会再跳到 Safari；同一邮箱可同步手机和电脑学习记录。';
    const pending=localStorage.getItem(PENDING);
    if(pending && !user)showOtp(pending);
  }

  window.login=sendOtpCode;
  window.verifyOtpCode=verifyOtpCode;
  patchUI();
  setTimeout(patchUI,300);
  setTimeout(patchUI,1200);
})();
