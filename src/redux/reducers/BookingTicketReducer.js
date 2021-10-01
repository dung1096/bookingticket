import { BOOK, CANCEL, SELECT } from "../types/BookingTicketType";

const stateDefault = {
  selectingChairs: [],
  total: 0,
  lineChairs: [
    {
      line: "",
      chairList: [
        { number: "1", price: 0 },
        { number: "2", price: 0 },
        { number: "3", price: 0 },
        { number: "4", price: 0 },
        { number: "5", price: 0 },
        { number: "6", price: 0 },
        { number: "7", price: 0 },
        { number: "8", price: 0 },
        { number: "9", price: 0 },
        { number: "10", price: 0 },
        { number: "11", price: 0 },
        { number: "12", price: 0 },
      ],
    },
    {
      line: "A",
      chairList: [
        { number: "A1", price: 75000, selected: false },
        { number: "A2", price: 75000, selected: false },
        { number: "A3", price: 75000, selected: false },
        { number: "A4", price: 75000, selected: false },
        { number: "A5", price: 75000, selected: false },
        { number: "A6", price: 75000, selected: false },
        { number: "A7", price: 75000, selected: false },
        { number: "A8", price: 75000, selected: false },
        { number: "A9", price: 75000, selected: false },
        { number: "A10", price: 75000, selected: false },
        { number: "A11", price: 0, selected: true },
        { number: "A12", price: 0, selected: true },
      ],
    },
    {
      line: "B",
      chairList: [
        { number: "B1", price: 75000, selected: false },
        { number: "B2", price: 75000, selected: false },
        { number: "B3", price: 75000, selected: false },
        { number: "B4", price: 75000, selected: false },
        { number: "B5", price: 75000, selected: false },
        { number: "B6", price: 75000, selected: false },
        { number: "B7", price: 75000, selected: false },
        { number: "B8", price: 75000, selected: false },
        { number: "B9", price: 75000, selected: false },
        { number: "B10", price: 75000, selected: false },
        { number: "B11", price: 75000, selected: false },
        { number: "B12", price: 75000, selected: false },
      ],
    },
    {
      line: "C",
      chairList: [
        { number: "C1", price: 75000, selected: false },
        { number: "C2", price: 75000, selected: false },
        { number: "C3", price: 75000, selected: false },
        { number: "C4", price: 75000, selected: false },
        { number: "C5", price: 75000, selected: false },
        { number: "C6", price: 75000, selected: false },
        { number: "C7", price: 75000, selected: false },
        { number: "C8", price: 75000, selected: false },
        { number: "C9", price: 75000, selected: false },
        { number: "C10", price: 75000, selected: false },
        { number: "C11", price: 75000, selected: false },
        { number: "C12", price: 75000, selected: false },
      ],
    },
    {
      line: "D",
      chairList: [
        { number: "D1", price: 75000, selected: false },
        { number: "D2", price: 75000, selected: false },
        { number: "D3", price: 75000, selected: false },
        { number: "D4", price: 75000, selected: false },
        { number: "D5", price: 75000, selected: false },
        { number: "D6", price: 75000, selected: false },
        { number: "D7", price: 75000, selected: false },
        { number: "D8", price: 75000, selected: false },
        { number: "D9", price: 75000, selected: false },
        { number: "D10", price: 75000, selected: false },
        { number: "D11", price: 75000, selected: false },
        { number: "D12", price: 75000, selected: false },
      ],
    },
    {
      line: "E",
      chairList: [
        { number: "E1", price: 75000, selected: false },
        { number: "E2", price: 75000, selected: false },
        { number: "E3", price: 75000, selected: false },
        { number: "E4", price: 75000, selected: false },
        { number: "E5", price: 75000, selected: false },
        { number: "E6", price: 75000, selected: false },
        { number: "E7", price: 75000, selected: false },
        { number: "E8", price: 75000, selected: false },
        { number: "E9", price: 75000, selected: false },
        { number: "E10", price: 75000, selected: false },
        { number: "E11", price: 75000, selected: false },
        { number: "E12", price: 75000, selected: false },
      ],
    },
    {
      line: "F",
      chairList: [
        { number: "F1", price: 75000, selected: false },
        { number: "F2", price: 75000, selected: false },
        { number: "F3", price: 75000, selected: false },
        { number: "F4", price: 75000, selected: false },
        { number: "F5", price: 75000, selected: false },
        { number: "F6", price: 75000, selected: false },
        { number: "F7", price: 75000, selected: false },
        { number: "F8", price: 75000, selected: false },
        { number: "F9", price: 75000, selected: false },
        { number: "F10", price: 75000, selected: false },
        { number: "F11", price: 75000, selected: false },
        { number: "F12", price: 75000, selected: false },
      ],
    },
    {
      line: "G",
      chairList: [
        { number: "G1", price: 75000, selected: false },
        { number: "G2", price: 75000, selected: false },
        { number: "G3", price: 75000, selected: false },
        { number: "G4", price: 75000, selected: false },
        { number: "G5", price: 75000, selected: false },
        { number: "G6", price: 75000, selected: false },
        { number: "G7", price: 75000, selected: false },
        { number: "G8", price: 75000, selected: false },
        { number: "G9", price: 75000, selected: false },
        { number: "G10", price: 75000, selected: false },
        { number: "G11", price: 75000, selected: false },
        { number: "G12", price: 75000, selected: false },
      ],
    },
    {
      line: "H",
      chairList: [
        { number: "H1", price: 75000, selected: false },
        { number: "H2", price: 75000, selected: false },
        { number: "H3", price: 75000, selected: false },
        { number: "H4", price: 75000, selected: false },
        { number: "H5", price: 75000, selected: false },
        { number: "H6", price: 75000, selected: false },
        { number: "H7", price: 75000, selected: false },
        { number: "H8", price: 75000, selected: false },
        { number: "H9", price: 75000, selected: false },
        { number: "H10", price: 75000, selected: false },
        { number: "H11", price: 75000, selected: false },
        { number: "H12", price: 75000, selected: false },
      ],
    },
    {
      line: "I",
      chairList: [
        { number: "I1", price: 75000, selected: false },
        { number: "I2", price: 75000, selected: false },
        { number: "I3", price: 75000, selected: false },
        { number: "I4", price: 75000, selected: false },
        { number: "I5", price: 75000, selected: false },
        { number: "I6", price: 75000, selected: false },
        { number: "I7", price: 75000, selected: false },
        { number: "I8", price: 75000, selected: false },
        { number: "I9", price: 75000, selected: false },
        { number: "I10", price: 75000, selected: false },
        { number: "I11", price: 75000, selected: false },
        { number: "I12", price: 75000, selected: false },
      ],
    },
    {
      line: "J",
      chairList: [
        { number: "J1", price: 75000, selected: false },
        { number: "J2", price: 75000, selected: false },
        { number: "J3", price: 75000, selected: false },
        { number: "J4", price: 75000, selected: false },
        { number: "J5", price: 75000, selected: false },
        { number: "J6", price: 75000, selected: false },
        { number: "J7", price: 75000, selected: false },
        { number: "J8", price: 75000, selected: false },
        { number: "J9", price: 75000, selected: false },
        { number: "J10", price: 75000, selected: false },
        { number: "J11", price: 75000, selected: false },
        { number: "J12", price: 75000, selected: false },
      ],
    },
  ],
};

const BookingTicketReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case SELECT: {
          if (action.chair.selected) {
            return { ...state };
          }
          let selectingChairsUpdate = [...state.selectingChairs];
          let key = true;
          selectingChairsUpdate.map((chair, index)=>{
            if(chair.number === action.chair.number) {
              selectingChairsUpdate.splice(index, 1);
              state.total -= action.chair.price;
              return key = false;
            }
            return key;
          })
          if (key) {
            selectingChairsUpdate.push(action.chair);
            state.total += action.chair.price;
          }
          state.selectingChairs = selectingChairsUpdate;
          return { ...state };
        }

        case CANCEL: {
          let selectingChairsUpdate = [...state.selectingChairs];
          selectingChairsUpdate.map((chair, index)=>{
            if(chair.number === action.chair.number) {
              selectingChairsUpdate.splice(index, 1);
              state.total -= action.chair.price;
            }
            return selectingChairsUpdate;
          })
          state.selectingChairs = selectingChairsUpdate;
          return { ...state };
        }

        case BOOK: {
          let chairUpdate = [...state.lineChairs];
          for (let chairs of chairUpdate) {
            chairs.chairList.map((chair)=>{
              for (let selectingChair of state.selectingChairs) {
                if (selectingChair.number === chair.number) {
                  chair.selected = true;
                }
              }
              return chairUpdate;
            })
          }
          state.selectingChairs = [];
          state.total = 0;
          state.lineChairs = chairUpdate;
          return { ...state };
        }

        default:
          return { ...state };
    }
}

export default BookingTicketReducer;