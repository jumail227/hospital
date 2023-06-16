import {configureStore} from '@reduxjs/toolkit'
import dataslice, { dataSlicing } from './DataSlice'
import Datareducer from './DataSlice'   

const store =configureStore({
    reducer:{
        dataSlicing:Datareducer,
    }
})

export default store;