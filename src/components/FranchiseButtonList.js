// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, shallowEqual } from 'react-redux';
// import { Button } from 'reactstrap';
// import usePromise from './Hooks/usePromise';
// import { getFranchise } from '../redux/actions/api_franchise'
// import Loader from './Loader';

// const containerStyle= {
//     width: '100%',
//     minHeight: '10px',
//     backgroundColor: '#1F1F1F',
//     display: 'flex',
//     alignItems: 'center',
// }

// const genColorText = (id) => {
//     const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light'];
//     return colors[id%7];
// }

// const FranchiseButtonList = ({ updateSelectedFranchiseList, monotone, allActive=false }) => {
//     const [selectedFranchiseList, setSelectedFranchiseList] = useState([])

//     // shallowEqual: 이전 state 값과 비교했을 때 값이 바뀌었을 때만 rerender
//     const franchiseList = useSelector(state => state.api_franchise.franchise_list, shallowEqual)
//     const [loading, resolved, error] = usePromise(getFranchise(), [], franchiseList)

//     useEffect(() => {
//         if(allActive) {
//             franchiseList.forEach((franchise) => {
//                 selectedFranchiseList.push(franchise.id)
//             })
//             setSelectedFranchiseList([...selectedFranchiseList])
//         }
//     },[])

//     // render this function only when selectedFranchiseList value changed
//     const handleFranchiseSelect = useCallback(e => {
//         let { name } = e.target
//         if(name==="franchise_all"){
//             if(franchiseList.length === selectedFranchiseList.length){
//                 setSelectedFranchiseList([])
//             }
//             else {
//                 franchiseList.forEach((franchise) => {
//                     if(selectedFranchiseList.includes(franchise.id)) return;
//                     selectedFranchiseList.push(franchise.id)
//                 })
//                 setSelectedFranchiseList([...selectedFranchiseList])
//             }
//         }
//         else {
//             let franchiseIdIndex = selectedFranchiseList.findIndex(id => id===parseInt(name))
//             if(franchiseIdIndex===-1) selectedFranchiseList.push(parseInt(name))
//             else selectedFranchiseList.splice(franchiseIdIndex, 1)
//             setSelectedFranchiseList([...selectedFranchiseList])
//         }
        
//     }, [selectedFranchiseList])

//     useEffect(() => {
//         updateSelectedFranchiseList(selectedFranchiseList)
//     }, [selectedFranchiseList])

//     if(loading) return <Loader height_restriction={true} />
//     return(
//         <div style={containerStyle}>
//             {franchiseList.filter(franchise => franchise.id!==14 || franchise.id!==25)
//             .map((franchise, index) => {
//                 return (
//                     <Button
//                         outline
//                         className="m-1"
//                         style={{minHeight: '97px'}}
//                         key={index}
//                         name={franchise.id}
//                         color={monotone ? "primary" : genColorText(franchise.id)}
//                         onClick={handleFranchiseSelect}
//                         active={selectedFranchiseList.includes(franchise.id)}
//                         size="sm"
//                     >
//                         {franchise.location}
//                     </Button>
//                 )
//             })
//             }
//             <Button
//                 size="sm"
//                 style={{minHeight: '97px'}}
//                 name="franchise_all"
//                 onClick={handleFranchiseSelect}
//                 color="info"
//             >
//                 모두 선택
//             </Button>
//         </div>
//     )

// }

// // Props 값이 바뀔때면 rerendering
// export default React.memo(FranchiseButtonList);