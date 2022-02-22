export const post_payment_info = (personalInfo, topolar_uid) => {
    var obj = new Object();

    obj.PCD_CPAY_VER = "1.0.1";
    obj.PCD_PAY_TYPE = personalInfo.pay_method;           
    obj.PCD_PAY_WORK = personalInfo.pay_work;
    obj.PCD_CARD_VER = personalInfo.is_billing;
    obj.PCD_PAYER_NO = personalInfo.user_id;  
    obj.PCD_PAYER_NAME = personalInfo.name;
    obj.PCD_PAYER_HP = personalInfo.tel;
    obj.PCD_PAYER_EMAIL = personalInfo.email;
    obj.PCD_PAY_GOODS = "TOPOLAR 서비스 이용료";
    obj.PCD_PAY_TOTAL = personalInfo.total_price;
    obj.PCD_PAY_OID = topolar_uid;
    obj.PCD_USER_DEFINE1= 'tscoding';
    obj.PCD_TAXSAVE_FLAG = "Y"
    // obj.PCD_CST_ID='test';
    // obj.PCD_CUST_KEY='abcd1234567890';
    return obj;
}