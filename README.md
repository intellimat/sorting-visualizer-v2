# sorting-visualizer-v2

This is a web application that shows how different sorting algorithms work. The three algorithms available are _mergesort_, _quicksort (3-way partitioning)_, _heapsort_.

### Stack

- **React 18**
- Typescript
- RxJs
- Material UI

### Components

- Header
- Chart

The _Header_ component manages the user clicks and can enable or disable all the buttons if the sorting is currently being shown or not.
The _Chart_ component is a container which maps every element of the list of numbers into a \<div> element which has an height proportional to the element value.

### How sorting visualisation actually works

Every time the users clicks on a sorting button (like merge sort), an event is dispatched on a shared event bus. The chart component, which subscribes to the same event bus, will handle the event dispatched by the Header component and begin the sorting. Once the sorting is completed, a sorting history (list of number[]) having key moments of sorting will be returned, and the Chart component will be able to update its list state based on the different state it had during the sorting algorithm

### More on the event bus

An event bus was not required at all to develop the communication between components (props suffice) but I thought it was a fun and interesting to use observable in React. RxJs is a reactive-programming library mainly used with Angular but can also be used with React to make some magic happens!

### Docker

Github actions have been configured so that a new image is pushed to my docker hub account every time a commit has been pushed.
Docker registry: _Docker Hub_
Docker Image: _intellimat/sorting-visualizer-v2_

### Deployment

The application has been deployed on Vercel and you can access it through the following link: https://sorting-visualizer-v2-nu.vercel.app/

### Last but not least

This project was implemented for fun and in relative short amount of time hence there are things that can be improved!
Feel free to reach out to me to ask me questions, give suggestions or to tell me that you appreciated this project :stuck_out_tongue_winking_eye:
