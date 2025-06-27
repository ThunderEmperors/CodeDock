import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  selectedId: null,
  elements: [
    { id: '1', name: 'Button', code: '<button>Click me</button>' },
    { id: '2', name: 'Header', code: '<h1>Title</h1>' },
    { id: '3', name: 'Paragraph', code: '<p>Some text here</p>' },
  ],
};

const elementsSlice = createSlice({
  name : 'elementselector',
  initialState,
  reducers: {
    elementSelected: (state, action) => {
      state.selectedId = action.payload;
    },

    elementAdded: (state, action) => {
      // console.log(action.payload);
      state.elements.push(action.payload);
    },
    
    elementUpdated: (state, action) => {
      // return action.payload
      
      state.elements.map((el) => {
        // console.log(el.id, state.selectedId);
        // el.id === state.selectedId ? {el.code = action.value} : el
        if(el.id === state.selectedId){
          console.log("SJKDLF")
          el.code = action.payload
        }
        console.log(el.code);

      })
      
    },

    setListUpdated: (state, action) => {
      // console.log(action.payload);
      state.elements = action.payload;
    }
  }

})

export const { elementSelected, elementAdded, elementUpdated, setListUpdated } = elementsSlice.actions

export default elementsSlice.reducer