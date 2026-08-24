-- 第48期校党校学习助手 V4/V7：系统学习进度云同步
-- 在 Supabase Dashboard -> SQL Editor 中运行一次即可。

create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create index if not exists lesson_progress_user_idx on public.lesson_progress(user_id);

drop trigger if exists trg_lp_updated on public.lesson_progress;
create trigger trg_lp_updated
before update on public.lesson_progress
for each row execute function public.touch_updated_at();

alter table public.lesson_progress enable row level security;

revoke all on public.lesson_progress from anon, authenticated;
grant select,insert,update,delete on public.lesson_progress to authenticated;

drop policy if exists "users read own lesson progress" on public.lesson_progress;
create policy "users read own lesson progress"
on public.lesson_progress for select to authenticated
using ((select auth.uid())=user_id);

drop policy if exists "users insert own lesson progress" on public.lesson_progress;
create policy "users insert own lesson progress"
on public.lesson_progress for insert to authenticated
with check ((select auth.uid())=user_id);

drop policy if exists "users update own lesson progress" on public.lesson_progress;
create policy "users update own lesson progress"
on public.lesson_progress for update to authenticated
using ((select auth.uid())=user_id)
with check ((select auth.uid())=user_id);

drop policy if exists "users delete own lesson progress" on public.lesson_progress;
create policy "users delete own lesson progress"
on public.lesson_progress for delete to authenticated
using ((select auth.uid())=user_id);
