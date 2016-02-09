This readme is incomplete.

Layout
=========

Layout is a container that is overly complex and slow, and will be changing in the near future. Keep this in mind as you read through the code.  The Layout is a container that has two main goals:

1. Translate Redux State into React Props

Since all of our views depend on parts of our Library and user, it makes sense that have all of that information come to head at a point, in this case the Layout. This is the only component that interacts with Redux to get Library information,

2. Wrap our views

Layout is also the main layout of the application, and has all of the persistant views. Anything that stays on-screen at all times is nested within this container.  All of our routes are displayed through this container via `React.cloneElement(this.props.children, { library, user, book, chapter })`, which also passes down the props library, user, book, and chapter.
