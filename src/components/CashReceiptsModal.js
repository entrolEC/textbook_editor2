// import React from 'react';
// import { Modal } from "reactstrap";
// import { connect } from 'react-redux';
// import close_btn from '../assets/root_img/Modal/BtnClose.svg';
// import { formatCompanyRegisNumber, formatMobileNumber } from '../pages/root/SignUp/formatters';
// import { showToast } from '../helpers/toast';
// import * as pay_actions from '../redux/actions/api_payment';
// import Loader from './Loader';
// import '../assets/css/RootModal.css';
// import Button from '../components/Button';

// class CashReceiptsModal extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             tradeuse: 'personal',
//             identinum: '',
//         }
//     }

//     handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'tradeuse') {
//             this.setState({
//                 identinum: '',
//                 [name]: value,
//             })
//         }
//         else if (name==='identinum' && this.state.tradeuse === 'personal') {
//             let value_temp = formatMobileNumber(value);
//             this.setState({
//                 [name]: value_temp
//             })
//         }
//         else if (name==='identinum' && this.state.tradeuse === 'company') {
//             let value_temp = formatCompanyRegisNumber(value);
//             this.setState({
//                 [name]: value_temp
//             })
//         }
//     }

//     submit = async() => {
//         const { tradeuse, identinum } = this.state;
        
//         if (!tradeuse || !identinum ) {
//             showToast('', '필수 정보를 입력해 주세요', 'danger')
//             return;
//         }

//         let body = {
//             identinum: this.state.identinum.replace(/-/g,''),
//             tradeuse: this.state.tradeuse,
//         }

//         await this.props.process_cash_receipts(this.props.pay_id, body)
//         this.props.toggle()
//     }

//     render () {
//         const { isOpen, toggle, cash_receipt_loading } = this.props;
//         const { tradeuse } = this.state;
        
//         return (
//             <React.Fragment>
//                 <Modal className='root-modal-small-dialog' isOpen={isOpen} toggle={toggle} centered>
//                     <div className='root-modal-small'>
//                         <div className='modal-small-container'>
//                             <div className='modal-s1-container flex-column-between'>
//                                 <div className='s1-eng'>
//                                     Cash Receipts
//                                 </div>
//                                 <div className='s1-title'>
//                                     현금 영수증 신청
//                                 </div>
//                                 <a className='close-btn-container' onClick={toggle}>
//                                     <img src={close_btn}/>
//                                 </a>
//                             </div>
//                             {cash_receipt_loading===false?
//                             // {false?
//                             <div>
//                                 <div className='payment-type-container mt-3'>
//                                     <input className='payment-radio' type='radio' name="tradeuse" value='personal' onClick={this.handleChange} defaultChecked />
//                                     <div className='ml-1 mr-3 font-18'>개인소득공제</div>
//                                     <input className='payment-radio' type='radio' name="tradeuse" value='company' onClick={this.handleChange}/>
//                                     <div className='ml-1 mr-3 font-18'>사업자증빙</div>
//                                 </div>
//                                 <div className='mt-3 font-18'>
//                                     {tradeuse==='personal'?
//                                     "휴대폰 번호":"사업자 번호"}
//                                 </div>
//                                 <input
//                                     className='input-general-h32'
//                                     name='identinum'
//                                     value={this.state.identinum}
//                                     onChange={this.handleChange}
//                                 />
//                                 <div className='mt-4 flex-between'>
//                                     <Button onClick={()=>this.submit()} fullWidth>신청</Button>
//                                     <Button onClick={toggle} color="danger" fullWidth>취소</Button>
//                                 </div>
//                             </div>
//                             :
//                             <div className='modal-loader-container'>
//                                 <Loader />
//                                 <style jsx="true">{`
//                                     .modal-loader-container .row {
//                                         margin: 0px;
//                                     }
//                                     .modal-loader-container .vh-50 {
//                                         height: 288px !important;
//                                     }
//                                 `} </style>
//                             </div>
//                             }
                            
//                         </div>
//                     </div>
//                 </Modal>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     cash_receipt_loading: state.api_payment.cash_receipt_loading,
// })

// const mapDispatchToProps = dispatch => ({
//     process_cash_receipts: (payId, payInfo) => dispatch(pay_actions.processCashReceipt(payId, payInfo)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CashReceiptsModal);