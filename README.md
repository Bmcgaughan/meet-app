## Meet-App

This application is built so users can find events in their locations. It will be using React, and will be built using TDD.

# Feature 2: Show and Hide Event Details

As a user, I would like to be able to display and collapse event details so I can see more or less information depending on my preference.

- Scenario 1 : Collapsed by Default
  - Given user is on the main page
  - When nothing is selected
  - Then the even details will be 'collapsed'

- Scenario 2: Expanding the details
  - Given user wants to see more about an event
  - When the user clicks clicks on that event
  - Then the details for that event will expand

- Scenario 3: Collapse the details
  - Given user has seen the details and wants to collapse
  - When the user clicks on the expanded details
  - Then the details will collapse again

# Feature 3: Specify number of Events

As a user I should be able to choose the number of events I want to see

- Scenario 1: No Number is specified
  - Given the user has not specified a preference
  - When the user visits the page
  - Then a default of 32 events is displayed

- Scenario 2: User has specified event count preference
  - Given the user has chosen an event count preference
  - When the user visits the page
  - Then the specified count of events will display


# Feature 4 : Use App even when offline

As a user I would like to be able to access events even when offline

- Scenario 1: Show cached data when offline
  - Given the user has no internet
  - When they access the site
  - Then the data is still accessible and viewable

- Scenario 2: Show error if user tried to change location
  - Given the user has no internet
  - When they want to change location or information
  - Then an error is diplayed




