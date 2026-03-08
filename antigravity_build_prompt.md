Build a mobile-first, premium, minimalist life-tracking web app called LifeOS.

The app should feel modern, calm, elegant, and highly usable on mobile first, while also working beautifully on desktop.

The purpose of the app is to let a user track:
1. what they did throughout the day in 5-minute time blocks
2. their emotions, strongest thoughts, and emotional intensity
3. weekly patterns between activity and inner state

The design must feel like a market-leading modern app:
- clean
- minimalist
- premium
- spacious
- high-clarity
- subtle motion
- excellent typography
- soft cards
- rounded corners
- intuitive interaction
- extremely easy to use

Use a black / white / neutral palette with optional dark mode.
Use generous whitespace.
Use smooth micro-interactions.
Use a mobile-first responsive layout.

-----------------------------------
CORE PRODUCT STRUCTURE
-----------------------------------

Create 4 main tabs or pages:

1. Today
2. Week
3. Emotions
4. Insights

The app should support authentication and persistent user data.

Use Supabase for:
- auth
- database
- data persistence

-----------------------------------
TODAY PAGE
-----------------------------------

This is the main dashboard.

At the top, show a premium header with:
- app name
- selected date
- quick toggle to jump back to today
- dark mode toggle

Show summary cards for:
- total tracked time today
- top category today
- number of emotion entries today
- recurring thought today

Main section: Activity Log

The user must be able to add activity entries with:
- title
- category
- start time
- end time
- notes

Important logic:
- all time tracking is based on 5-minute precision
- duration must be calculated automatically
- end time must be after start time
- duration must be a multiple of 5 minutes

Do NOT force the user to log 288 separate five-minute blocks.
Instead, let the user create time blocks with start and end times in 5-minute increments.

Example:
08:00–08:45 Deep Work
08:45–09:00 Email
09:00–09:30 Meeting

Show activities in a beautiful chronological card list or timeline.

Each activity card should show:
- category badge with emoji
- time range
- duration
- title
- optional notes
- edit button
- delete button

Also show a live category breakdown for the selected day:
- total minutes per category
- visual progress bars or clean charts
- sorted by highest time first

Include a progress indicator showing how much of the day has been tracked.

-----------------------------------
WEEK PAGE
-----------------------------------

Create a 7-day review view.

For the selected day and surrounding week, show:
- each day as a card
- total tracked time
- top category
- emotion score or average emotional intensity
- clear date labels

Allow the user to quickly understand the shape of the past 7 days.

This page should feel analytical but still clean and elegant.

-----------------------------------
EMOTIONS PAGE
-----------------------------------

Create a dedicated emotion journaling section.

The user must be able to add an emotion reflection with:
- mood
- intensity from 1 to 10
- strongest or most common thought
- notes
- automatic timestamp
- linked entry date

Provide a curated set of moods, such as:
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

Show emotion history for the selected day.

Each emotion entry should show:
- mood badge
- intensity
- timestamp
- thought
- notes
- delete action

Also surface simple emotional stats for the day:
- number of emotion entries
- average intensity
- most common mood
- dominant thought

-----------------------------------
INSIGHTS PAGE
-----------------------------------

Create a clean interpretation page showing simple derived insights.

For the current week, surface:
- most invested category
- least represented category
- recurring thought
- emotional patterns
- simple suggestions

Do not overcomplicate this page.
It should feel reflective and intelligent.

Use lightweight derived insights from stored data, such as:
- category with most minutes this week
- category with least minutes this week
- most repeated thought in emotion entries
- average emotional intensity across the week

Also include a section showing the future expansion roadmap:
- AI summaries
- correlation detection
- best day blueprint
- recurring triggers
- personalized recommendations

-----------------------------------
DATABASE
-----------------------------------

Use Supabase / Postgres and create these tables:

1. users
- id
- email
- full_name
- created_at
- updated_at

2. categories
- id
- user_id
- name
- slug
- emoji
- color
- sort_order
- is_default
- created_at
- updated_at

3. activity_entries
- id
- user_id
- category_id
- entry_date
- title
- notes
- start_time
- end_time
- duration_minutes
- source
- created_at
- updated_at

4. emotion_entries
- id
- user_id
- entry_date
- mood
- intensity
- thought
- notes
- trigger_label
- created_at
- updated_at

Optional later:
5. daily_summaries

Enable row-level security so users can only access their own records.

-----------------------------------
DEFAULT CATEGORY SEED DATA
-----------------------------------

Seed these categories for each new user:
- Deep Work 🧠
- Admin 📋
- Exercise 🏃
- Meals 🍽️
- Social 🫶
- Family 🏡
- Faith ✨
- Learning 📚
- Leisure 🎧
- Sleep 😴
- Travel 🚗
- Recovery 🧘

-----------------------------------
DESIGN SYSTEM
-----------------------------------

Visual direction:
- premium minimalism
- modern dashboard
- soft glassmorphism only if subtle
- strong spacing
- rounded cards
- calm neutral colors
- black / white / gray aesthetic
- beautiful hierarchy
- highly legible mobile UI
- polished empty states
- restrained icons
- smooth transitions

Typography:
- modern sans-serif
- clean, refined, readable
- good scale hierarchy for mobile and desktop

Components:
- app shell
- tab navigation
- summary stat cards
- activity cards
- emotion cards
- form dialog or bottom sheet for adding entries
- badges
- progress bars
- weekly day cards
- insight cards

Mobile UX rules:
- thumb-friendly tap targets
- minimal friction
- forms easy to complete quickly
- sticky add action where useful
- responsive layout first, desktop second

-----------------------------------
FUNCTIONAL REQUIREMENTS
-----------------------------------

The app must:
- persist user data
- work well on mobile and desktop
- support CRUD for activities
- support CRUD for emotions
- calculate totals by category
- calculate weekly summaries
- calculate recurring thoughts
- calculate most common mood
- calculate average emotional intensity
- allow date switching
- support dark mode

Prefer a clean React / Next.js style architecture with reusable components and good state handling.

Use production-quality structure, not a rough mockup.

-----------------------------------
IMPORTANT PRODUCT DECISIONS
-----------------------------------

1. Make activity logging fast.
2. Preserve 5-minute precision without making the user manually fill all day slots.
3. Make the app feel emotionally intelligent, not just productivity-focused.
4. Keep the interface uncluttered.
5. Design for daily personal use, not corporate team management.
6. Make it beautiful enough that the user wants to open it often.

-----------------------------------
OUTPUT EXPECTATION
-----------------------------------

Generate the full application with:
- page structure
- components
- database integration
- Supabase schema setup
- seeded categories
- responsive UI
- clean design system
- polished states
- working CRUD functionality
- derived dashboard calculations

The result should feel like a premium personal operating system for time, emotion, and self-awareness.

Prioritize production-ready structure, real Supabase integration, mobile UX quality, and polished visual hierarchy over decorative complexity.