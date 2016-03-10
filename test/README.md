Testing
==========

The test directory includes utilities and fake data that we can use for testing in Bentotime. If you're looking for our actual tests, they are found in each module's folder!


#### Fixtures
Fixtures are static data that we can use for fake api responses and other pieces of data. This helps our tests remain independent and unaffected by changes in data, letting us further distiguish where bugs are coming from.


#### Stubs
Stubs, similar to fixtures, help us by making previously dynamic content into static content.  As opposed to fixtures, which focus on data, stubs should focus on fake functions. Using stubs makes it easier to test the expected functionality of one file at a time by forcing dependencies to complete an expected function 100% of the time.
