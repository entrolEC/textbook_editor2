// import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import { Card, CardHeader, CardTitle } from 'reactstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import { studentConsultingTableColumns } from '../pages/admin/consulting/OngoingTableColumns';
// import '../assets/sass/Service/AdminConsulting.scss';
// import classNames from 'classnames';

// const ConsultingView = ({consultingInfo=null, isFranchise=null}) => {
//     const statusBadge = (status) => {
//         return (
//             <div className={classNames('service-consulting-status', status)}>
//                 {status==="RE" ? "보류" : (status==="PR" ? "진행중" : (status==="FI" ? "완료" : (status==="AB" ? "중단" : "알수없음")))}
//             </div>
//         )   
//     }

//     const dataFilter = () => {
//         if(!consultingInfo) return [];

//         return consultingInfo.map((consulting) => {
//             return {
//                 consultingId: consulting.id,
//                 consultingType: consulting.consulting_type.type,
//                 consultingStartDate: consulting.start_date,
//                 consultingPayDate: consulting.pay_type==="OP" ? "결제완료" : consulting.next_pay_date,
//                 consultingTitle: consulting.title,
//                 remainDay: consulting.remaining_times+"달",
//                 price: consulting.price.toLocaleString()+" 원",
//                 status: statusBadge(consulting.status)
//             }
//         })
//     }

//     return (
//         <>
//             <Card>
//                 <CardHeader>
//                     <CardTitle>
//                         {isFranchise ? "학생 " : ""}컨설팅 현황
//                     </CardTitle>
//                 </CardHeader>
//                 <BootstrapTable
//                     keyField="consultingId"
//                     data={dataFilter()}
//                     columns={studentConsultingTableColumns}
//                     bootstrap4
//                     bordered={false}
//                     noDataIndication="등록된 컨설팅 정보가 없습니다."
//                 />
//             </Card>
//         </>
//     )
// }

// export default React.memo(ConsultingView);