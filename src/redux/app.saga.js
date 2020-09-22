import {takeEvery,take,delay,takeLatest,put} from 'redux-saga/effects'

// export function* onIncrement(){
//         yield console.log('I am incremented')
//         yield delay(3000)
// }
// export function* incrementSaga(){
//         yield takeEvery('INCREMENT',onIncrement);
// }

// export function* incrementSaga(){
//         yield take('INCREMENT')
//         yield console.log('I am incremented')
//        yield delay(300)
// }



export function* onIncrement(){
        yield console.log('I am incremented')
         yield delay(3000)
yield put({type:'INCREMENT'})
        
}
export function* incrementSaga(){
        yield takeLatest('INCREMENT',onIncrement);
       
}