# sorting-visualizer-v2

This is a web application that shows how different sorting algorithms work. The three algorithms available are _mergesort_, _quicksort (3-way partitioning)_ and  _heapsort_.

### Stack

- **React 18**
- Typescript
- RxJs (yes, that one!)
- Material UI

### Components

- Header
- Chart

The _Header_ component manages the user's clicks and can enable or disable all the buttons depending on whether the sorting history is currently being shown or not.
The _Chart_ component is a container which maps every element of the list of numbers into a \<div> element which has an height proportional to the element value.

### How sorting visualisation actually works

Every time the user clicks on a sorting button (like merge sort), an event is dispatched on a shared event bus. The chart component, which subscribes to the same event bus, will handle the event dispatched by the Header component and execute the specific sorting algorithm. Once the list of numbers has been sorted, a sorting history will be returned, and the Chart component will loop over the history to update its list state (with a delay) until all the history has been shown.  For the sake of clarity, the history mentioned is a list of lists of numbers (number[][]).

### More on the event bus

An event bus was not required at all to develop the communication between components (props suffice), but I thought it was fun and interesting to use observables together with React. RxJs is a very powerful reactive-programming library mainly used with Angular but can also be used with other frameworks as well :smiley:

### Docker

Github actions have been configured so that a new image is pushed to my docker hub account every time a commit has been pushed to the master branch. <br>

Docker Image: _intellimat/sorting-visualizer-v2_

You can pull the image from the Docker hub:
```
docker pull intellimat/sorting-visualizer-v2:latest
```
and run it with a command like: 
```
docker run -d -p 80:80 intellimat/sorting-visualizer-v2:latest
```

You should now be able to see the application running on **localhost**, on default port 80.

### Deployment

The application has been deployed on Vercel and you can access it through the following link: https://sorting-visualizer-v2-nu.vercel.app/

### Last but not least

This project was implemented for fun and in a short time, hence there are things that can be improved.
Feel free to reach out to me for questions and suggestions or to tell me that you appreciated this project :stuck_out_tongue_winking_eye:
