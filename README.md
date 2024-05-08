# biblejeopardy
Jeopardy game for the congregation

## Features to be implemented:
* Users can select how many teams are playing
* Total is calculated automatically 
* Multiple rounds for different categories
* Buzzer

## Built with:
* [React](https://react.dev/)
* [Vite](https://github.com/vitejs/vite)

## Screenshots:
![jeopardy](https://github.com/jehielle/biblejeopardy/assets/44626277/e241e1d9-319f-45b0-858b-e16232ec8907)


### Curr issues:
 
issue: need take id from button -> find id in tableArr, get index -> get corresponding question(string)
to output into modal, so that there's one modal, but its contents vary by whichever cell/dollar value u click.
i have this - how to pass the index into ModalContent?

```
const openModal = ({tableArr, id}) => {
setShowModal(true);
let index = tableArr.findIndex(document.getElementById(id));
return ({ index });
};
```

also - strike is toggled once you close the modal. i want to make it so that it only crosses out the cell/dollar value
that's clicked - not the others.
