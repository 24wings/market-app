let str = `
import { SignInPage } from "../pages/sign-in/sign-in"; //登录
import { ForgetPassword1Page } from "../pages/forget-password1/forget-password1";//忘记密码页，手机验证
import { ForgetPassword2Page } from "../pages/forget-password2/forget-password2";//忘记密码页，重置密码
import { Register1Page } from "../pages/register1/register1";//注册手机验证页
import { RegisterDetailPage } from "../pages/register-detail/register-detail"//注册详情页
import { FootBarPage } from '../pages/foot-bar/foot-bar';
import { PersonInfoPage } from '../pages/person-info/person-info';
import { WalletPage } from '../pages/wallet/wallet';
import { MessageWaitPage } from "../pages/message-wait/message-wait";//我的-待处理消息
import { MessageSetPage } from "../pages/message-set/message-set";//我的-消息设置
import { ModifyPasswordPage } from "../pages/modify-password/modify-password";//我的-修改密码
import { MyTeamPage } from "../pages/my-team/my-team";//我的-成员管理
import { ModifyPhonePage } from "../pages/modify-phone/modify-phone";//我的=修改手机
import { HelpPage } from "../pages/help/help";//我的-帮助
import { AppSetupPage } from "../pages/app-setup/app-setup";//我的-设置
import { WeighSetupPage } from "../pages/weigh-setup/weigh-setup";//我的-设置-称重设置
import { PrintingSetupPage } from "../pages/printing-setup/printing-setup";//我的-设置-打印设置
import { VoiceSetupPage } from "../pages/voice-setup/voice-setup";//我的-设置-语音设置
import { AboutUsPage, } from "../pages/about-us/about-us";//我的-设置-关于我们
import { InvitationPage } from "../pages/invitation/invitation";//我的-团队-发出的邀请
import { AddTeamerPage } from "../pages/add-teamer/add-teamer";//我的-团队-添加成员
import { HotIssPage } from "../pages/hot-iss/hot-iss";//我的-帮助-热点问题
import { OperationManualPage } from "../pages/operation-manual/operation-manual";//我的-帮助-操作手册
import { IssDetailPage } from "../pages/iss-detail/iss-detail";//问题详情页
import { OperationManualDetailPage } from "../pages/operation-manual-detail/operation-manual-detail";
import { MarketPage } from "../pages/market/market";//首页-市场公告
import { OpenBillPage } from "../pages/open-bill/open-bill";//交易开单
import { ProductDetailPage } from "../pages/product-detail/product-detail";//商品详情页
import { OpenBillPopPage } from "../pages/open-bill/pop";//交易开单右上角的pop层
import { MyTransactionPage } from "../pages/my-transaction/my-transaction";//我的交易
import { MyTransactionDetailPage } from "../pages/my-transaction-detail/my-transaction-detail";//我的 交易详情
import { QrCodePage } from "../pages/qr-code/qr-code";//交易二维码
import { StatisticalsPage } from "../pages/statisticals/statisticals";//统计分析
import { StatisticalCustomerPage } from "../pages/statistical-customer/statistical-customer";//交易客户统计
import { StatisticalProductPage } from "../pages/statistical-product/statistical-product";//交易商品统计
import { StatisticalReceivablesPage } from "../pages/statistical-receivables/statistical-receivables";//交易收款统计
import { StatisticalMoneyPage } from "../pages/statistical-money/statistical-money";//交易金额走势
import { StatisticalSummaryPage } from "../pages/statistical-summary/statistical-summary";//统计分析-交易金额汇总
import { CreditPage } from "../pages/credit/credit";//赊销记录
import { CreditDetailPage } from "../pages/credit-detail/credit-detail";//赊销详情
import { CustomerPage } from "../pages/customer/customer";//客列表
import { CreditSumPage } from "../pages/credit-sum/credit-sum";//赊销汇总
import { CreditDetail2Page } from "../pages/credit-detail2/credit-detail2";//赊销记录详情2-只有订单号
import { ProductListPage } from "../pages/product-list/product-list";//商品管理列表
import { ProductAddPage } from "../pages/product-add/product-add";//添加商品
import { ComeOutPage } from "../pages/come-out/come-out";//出厂申请
import { ComeOutListPage } from "../pages/come-out-list/come-out-list";//出厂申请记录
import { ArrearsSumPage } from "../pages/arrears-sum/arrears-sum";//欠款汇总
import { ArrearsDetailPage } from "../pages/arrears-detail/arrears-detail";//欠款明细
import { UnPayPage } from "../pages/un-pay/un-pay";//我的待付款
import { UnPayDetailPage } from "../pages/un-pay-detail/un-pay-detail";//支付详情
import { OpeningWallet1Page } from "../pages/opening-wallet1/opening-wallet1";//开通钱包1-用户协议
import { OpeningWallet2Page } from "../pages/opening-wallet2/opening-wallet2";//开通钱包-填写银行卡
import { OpeningWallet3Page } from "../pages/opening-wallet3/opening-wallet3";//开通钱包-设置支付密码
import { OpeningWallet4Page } from "../pages/opening-wallet4/opening-wallet4";//开通钱包-验证手机号
import { walletPopPage } from "../pages/wallet/pop-wallet"; //钱包右上角弹出
import { AuthenticationPage } from "../pages/authentication/authentication";//钱包-认证中心
import { RepaymentPage } from "../pages/repayment/repayment";//还款记录
import { OpenBillPop2Page } from "../pages/open-bill/open-bill-pop";//交易开单弹出的pop层
import { SelsetProductPage } from "../pages/selset-product/selset-product";//选择商品（交易开单-全部商品-商品列表）
import { ProductAPage } from "../pages/product-a/product-a";//1类商品
import { ProductBPage } from "../pages/product-b/product-b";
import { ProductCPage } from "../pages/product-c/product-c";
import { ProductDPage } from "../pages/product-d/product-d";
import { ModifyPhone2Page } from "../pages/modify-phone2/modify-phone2";
import { ReceivablesPage } from "../pages/receivables/receivables";//我的钱包-收款
import { TransferMoneyPage } from "../pages/transfer-money/transfer-money";//我的钱包转账
import { SaveMoneyPage } from "../pages/save-money/save-money";//我的钱包-圈存
import { PutMoneyPage } from "../pages/put-money/put-money";//圈提
import { AddIcPage } from "../pages/add-ic/add-ic";//添加银行卡
import { IncomePage } from "../pages/income/income";//我的钱包-收支记录
import { SetMoneyPage } from "../pages/set-money/set-money";//设置收款金额
`;

let lines = str.split(`\n`);

let bothImportPageAndModuleLines = lines.filter(line => line).map(line => {
    // let line = `import { HomePage } from '../pages/home/home';`;
    let pageName = / \w{1,}Page/g.exec(line)[0]
    let pagePath = /( '\.\..{1,}')|( "\.\..{1,})"/g.exec(line)[0];

    // console.log(pageName, pagePath)
    let moduleLine = `import { ${pageName}Module } from '${pagePath.replace(/'|"| /g,'')}.module';\n`

    return { moduleLine, pageName, pagePath, moduleName: pageName + 'Module', modulePath: pagePath + '.module' };
    // console.log(line)
});
console.log(lines.filter(line => line).join('\n'),
    bothImportPageAndModuleLines.map(mod => mod.moduleLine).join('\n'),
    bothImportPageAndModuleLines.map(mod => mod.moduleName).join(',\n'));