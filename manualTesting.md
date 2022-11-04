# TEST CASE 1

1. Description:
    - Test the See all bots Function
2. Steps:
    - Reload Page
    - click on "see all bots" button
3. Postconditions
    - Page should load all bots

# TEST CASE 2

1. Description:
    - Test Win/loss counter
2. Steps:
    - Reload Page
    - play game until a win and loss have occured
3. Postconditions
    - Counter should reflect both wins and losses


# BUG 1

1. Description:
    - See all Bots function doesn't display anything
2. Repo Steps:
    - load page
    - click "See All Bots" Button
3. Expected Result:
    - all bots are shown
4. Actual Result:
    - no bots are shown
5. Details:
    - console logs an error on client that is a 400
    - server error: "ERROR GETTING BOTS ReferenceError: botsArr is not defined"