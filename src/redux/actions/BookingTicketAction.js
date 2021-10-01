import { BOOK, CANCEL, SELECT } from "../types/BookingTicketType"

export const selectAction = (chair) => ({
    type: SELECT,
    chair,
})

export const cancelAction = (chair) => ({
    type: CANCEL,
    chair,
})

export const bookAction = () => ({
    type: BOOK,
})