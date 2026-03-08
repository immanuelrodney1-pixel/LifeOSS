PROJECT DATABASE SCHEMA
LifeOS — Personal Life Tracking System

STACK ASSUMPTION
Use Supabase / Postgres as the backend.

GOAL
Store:
- users
- activity entries
- emotion entries
- categories
- optional daily summaries

---

## 1. users

Purpose:
Store each authenticated user.

Fields:

id
uuid
primary key

email
text
unique
not null

full_name
text
nullable

created_at
timestamp with time zone
default now()

updated_at
timestamp with time zone
default now()

---

## 2. categories

Purpose:
Store activity categories for each user.

Fields:

id
uuid
primary key
default gen_random_uuid()

user_id
uuid
not null
references users(id)
on delete cascade

name
text
not null

slug
text
not null

emoji
text
nullable

color
text
nullable

sort_order
integer
default 0

is_default
boolean
default false

created_at
timestamp with time zone
default now()

updated_at
timestamp with time zone
default now()

Constraints:

unique(user_id, slug)

Notes:
Examples:
- deep-work
- admin
- exercise
- meals
- social
- family
- faith
- learning
- leisure
- sleep
- travel
- recovery

---

## 3. activity_entries

Purpose:
Store all time-tracked activity blocks.

Fields:

id
uuid
primary key
default gen_random_uuid()

user_id
uuid
not null
references users(id)
on delete cascade

category_id
uuid
nullable
references categories(id)
on delete set null

entry_date
date
not null

title
text
not null

notes
text
nullable

start_time
time
not null

end_time
time
not null

duration_minutes
integer
not null

source
text
default 'manual'

created_at
timestamp with time zone
default now()

updated_at
timestamp with time zone
default now()

Constraints:

check (duration_minutes > 0)
check (duration_minutes % 5 = 0)
check (end_time > start_time)

Indexes:

index on (user_id, entry_date)
index on (user_id, created_at)
index on (user_id, category_id, entry_date)

Notes:
- duration_minutes should be computed in app logic before insert
- entries must respect 5-minute increments
- source allows future support for imports or automations

---

## 4. emotion_entries

Purpose:
Store emotional reflections and recurring thoughts.

Fields:

id
uuid
primary key
default gen_random_uuid()

user_id
uuid
not null
references users(id)
on delete cascade

entry_date
date
not null

mood
text
not null

intensity
integer
not null

thought
text
nullable

notes
text
nullable

trigger_label
text
nullable

created_at
timestamp with time zone
default now()

updated_at
timestamp with time zone
default now()

Constraints:

check (intensity >= 1 and intensity <= 10)

Indexes:

index on (user_id, entry_date)
index on (user_id, mood)
index on (user_id, created_at)

Notes:
Mood examples:
- Calm
- Focused
- Grateful
- Joyful
- Hopeful
- Anxious
- Flat
- Overwhelmed
- Frustrated
- Sad

---

## 5. daily_summaries

Purpose:
Optional precomputed daily metrics for faster dashboards later.

Fields:

id
uuid
primary key
default gen_random_uuid()

user_id
uuid
not null
references users(id)
on delete cascade

summary_date
date
not null

total_tracked_minutes
integer
default 0

top_category_id
uuid
nullable
references categories(id)
on delete set null

emotion_entry_count
integer
default 0

average_emotion_intensity
numeric(4,2)
nullable

dominant_mood
text
nullable

top_thought
text
nullable

created_at
timestamp with time zone
default now()

updated_at
timestamp with time zone
default now()

Constraints:

unique(user_id, summary_date)

Indexes:

index on (user_id, summary_date)

Notes:
This table is optional for MVP.
Can be generated later by cron job, SQL view, or edge function.

---

## 6. optional_tags

Purpose:
Optional later feature for tagging activities or emotions.

Fields:

id
uuid
primary key
default gen_random_uuid()

user_id
uuid
not null
references users(id)
on delete cascade

name
text
not null

slug
text
not null

created_at
timestamp with time zone
default now()

Constraints:

unique(user_id, slug)

---

## 7. optional_activity_entry_tags

Purpose:
Join table for activity tags.

Fields:

activity_entry_id
uuid
not null
references activity_entries(id)
on delete cascade

tag_id
uuid
not null
references optional_tags(id)
on delete cascade

primary key (activity_entry_id, tag_id)

---

## RELATIONSHIPS

users
→ categories
→ activity_entries
→ emotion_entries
→ daily_summaries

categories
→ activity_entries

---

## MVP REQUIRED TABLES

For version 1, only build these:

- users
- categories
- activity_entries
- emotion_entries

daily_summaries can be added in phase 2.

---

## DEFAULT CATEGORY SEED DATA

Create these default categories for each new user:

1. Deep Work
slug: deep-work
emoji: 🧠

2. Admin
slug: admin
emoji: 📋

3. Exercise
slug: exercise
emoji: 🏃

4. Meals
slug: meals
emoji: 🍽️

5. Social
slug: social
emoji: 🫶

6. Family
slug: family
emoji: 🏡

7. Faith
slug: faith
emoji: ✨

8. Learning
slug: learning
emoji: 📚

9. Leisure
slug: leisure
emoji: 🎧

10. Sleep
slug: sleep
emoji: 😴

11. Travel
slug: travel
emoji: 🚗

12. Recovery
slug: recovery
emoji: 🧘

---

## SUPABASE RLS POLICIES

Enable row level security on all user-owned tables.

Rule:
Authenticated users can only view, insert, update, and delete rows where user_id = auth.uid().

Apply to:
- categories
- activity_entries
- emotion_entries
- daily_summaries
- optional_tags
- optional_activity_entry_tags

---

## FUTURE DATABASE EXPANSIONS

Later add:
- routines
- goals
- recurring templates
- AI insight logs
- weekly summaries
- habit streaks
- attachments
- voice notes