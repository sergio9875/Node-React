import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, message: 'How are You?'},
                    {id: 2, message: 'My First Post'},
                    {id: 3, message: 'My Post'},

                ],
            newPostText: ' ',


        },
        // dialogsPage: {
        //     dialogs: [
        //
        //         { id: 1, name: 'Svetik' },
        //         { id: 2, name: 'Serg' },
        //         { id: 3, name: 'Nik' },
        //         { id: 4, name: 'Murz' }
        //     ],
        //     messages:
        //         [
        //             { id: 1, message: 'Hello!' },
        //             { id: 2, message: 'How are you?' },
        //             { id: 3, message: 'My first sms' },
        //             { id: 4, message: 'You my friend!' }
        //         ],
        //     newMessageBody: ' ',
        //
        // },
        // productsPage: {
        //
        //     books:
        //         [
        //             { id: 1, title: 'JavaScript', price: 1000 },
        //             { id: 2, title: 'React', price: 2000 },
        //             { id: 3, title: 'Node.Js', price: 1500 },
        //             { id: 4, title: 'Angular', price: 1700 },
        //
        //         ],
        //     newBooksTitle: ' ',
        // }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },


    addBook(bookTitle) {
        let newBook = {
            id: 5, title: bookTitle, price: 2700
        };

        this._state.productsPage.books.push(newBook);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);

    }


}

export default store;

// store - OOP