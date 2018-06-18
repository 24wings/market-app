import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';
import { Keyboard } from '@ionic-native/keyboard';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { SetMoneyPage } from "../pages/set-money/set-money";//设置收款金额 import {  SignInPageModule } from '../pages/sign-in/sign-in.module';

import { ForgetPassword1PageModule } from '../pages/forget-password1/forget-password1.module';

import { ForgetPassword2PageModule } from '../pages/forget-password2/forget-password2.module';

import { Register1PageModule } from '../pages/register1/register1.module';

import { RegisterDetailPageModule } from '../pages/register-detail/register-detail.module';

import { FootBarPageModule } from '../pages/foot-bar/foot-bar.module';

import { PersonInfoPageModule } from '../pages/person-info/person-info.module';

import { WalletPageModule } from '../pages/wallet/wallet.module';

import { MessageWaitPageModule } from '../pages/message-wait/message-wait.module';

import { MessageSetPageModule } from '../pages/message-set/message-set.module';

import { ModifyPasswordPageModule } from '../pages/modify-password/modify-password.module';

import { MyTeamPageModule } from '../pages/my-team/my-team.module';

import { ModifyPhonePageModule } from '../pages/modify-phone/modify-phone.module';

import { HelpPageModule } from '../pages/help/help.module';

import { AppSetupPageModule } from '../pages/app-setup/app-setup.module';

import { WeighSetupPageModule } from '../pages/weigh-setup/weigh-setup.module';

import { PrintingSetupPageModule } from '../pages/printing-setup/printing-setup.module';

import { VoiceSetupPageModule } from '../pages/voice-setup/voice-setup.module';

import { AboutUsPageModule } from '../pages/about-us/about-us.module';

import { InvitationPageModule } from '../pages/invitation/invitation.module';

import { AddTeamerPageModule } from '../pages/add-teamer/add-teamer.module';

import { HotIssPageModule } from '../pages/hot-iss/hot-iss.module';

import { OperationManualPageModule } from '../pages/operation-manual/operation-manual.module';

import { IssDetailPageModule } from '../pages/iss-detail/iss-detail.module';

import { OperationManualDetailPageModule } from '../pages/operation-manual-detail/operation-manual-detail.module';

import { MarketPageModule } from '../pages/market/market.module';

import { OpenBillPageModule } from '../pages/open-bill/open-bill.module';

import { ProductDetailPageModule } from '../pages/product-detail/product-detail.module';



import { MyTransactionPageModule } from '../pages/my-transaction/my-transaction.module';

import { MyTransactionDetailPageModule } from '../pages/my-transaction-detail/my-transaction-detail.module';

import { QrCodePageModule } from '../pages/qr-code/qr-code.module';

import { StatisticalsPageModule } from '../pages/statisticals/statisticals.module';

import { StatisticalCustomerPageModule } from '../pages/statistical-customer/statistical-customer.module';

import { StatisticalProductPageModule } from '../pages/statistical-product/statistical-product.module';

import { StatisticalReceivablesPageModule } from '../pages/statistical-receivables/statistical-receivables.module';

import { StatisticalMoneyPageModule } from '../pages/statistical-money/statistical-money.module';

import { StatisticalSummaryPageModule } from '../pages/statistical-summary/statistical-summary.module';

import { CreditPageModule } from '../pages/credit/credit.module';

import { CreditDetailPageModule } from '../pages/credit-detail/credit-detail.module';

import { CustomerPageModule } from '../pages/customer/customer.module';

import { CreditSumPageModule } from '../pages/credit-sum/credit-sum.module';

import { CreditDetail2PageModule } from '../pages/credit-detail2/credit-detail2.module';

import { ProductListPageModule } from '../pages/product-list/product-list.module';

import { ProductAddPageModule } from '../pages/product-add/product-add.module';

import { ComeOutPageModule } from '../pages/come-out/come-out.module';

import { ComeOutListPageModule } from '../pages/come-out-list/come-out-list.module';

import { ArrearsSumPageModule } from '../pages/arrears-sum/arrears-sum.module';

import { ArrearsDetailPageModule } from '../pages/arrears-detail/arrears-detail.module';

import { UnPayPageModule } from '../pages/un-pay/un-pay.module';

import { UnPayDetailPageModule } from '../pages/un-pay-detail/un-pay-detail.module';

import { OpeningWallet1PageModule } from '../pages/opening-wallet1/opening-wallet1.module';

import { OpeningWallet2PageModule } from '../pages/opening-wallet2/opening-wallet2.module';

import { OpeningWallet3PageModule } from '../pages/opening-wallet3/opening-wallet3.module';

import { OpeningWallet4PageModule } from '../pages/opening-wallet4/opening-wallet4.module';

import { SignInPageModule } from '../pages/sign-in/sign-in.module';

import { AuthenticationPageModule } from '../pages/authentication/authentication.module';

import { RepaymentPageModule } from '../pages/repayment/repayment.module';


import { SelsetProductPageModule } from '../pages/selset-product/selset-product.module';

import { ProductAPageModule } from '../pages/product-a/product-a.module';

import { ProductBPageModule } from '../pages/product-b/product-b.module';

import { ProductCPageModule } from '../pages/product-c/product-c.module';

import { ProductDPageModule } from '../pages/product-d/product-d.module';

import { ModifyPhone2PageModule } from '../pages/modify-phone2/modify-phone2.module';

import { ReceivablesPageModule } from '../pages/receivables/receivables.module';

import { TransferMoneyPageModule } from '../pages/transfer-money/transfer-money.module';

import { SaveMoneyPageModule } from '../pages/save-money/save-money.module';

import { PutMoneyPageModule } from '../pages/put-money/put-money.module';

import { AddIcPageModule } from '../pages/add-ic/add-ic.module';

import { IncomePageModule } from '../pages/income/income.module';

import { SetMoneyPageModule } from '../pages/set-money/set-money.module';
import { LocalProvider } from '../providers/local/local';
import { StorageProvider } from '../providers/storage/storage';
import { ShopProvider } from '../providers/shop/shop';
import { CommonProvider } from '../providers/common/common';
import { LocalPage } from '../pages/local/local';
import { LocalPageModule } from '../pages/local/local.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // SignInPage,
    // ForgetPassword1Page,
    // ForgetPassword2Page,
    // Register1Page,
    // RegisterDetailPage,
    // FootBarPage,
    // PersonInfoPage,
    // WalletPage,
    // MessageWaitPage,
    // ModifyPasswordPage,
    // MyTeamPage,
    // ModifyPhonePage,
    // MessageSetPage,
    // HelpPage,
    // AppSetupPage,
    // WeighSetupPage,
    // PrintingSetupPage,
    // VoiceSetupPage,
    // // AboutUsPage,

    // InvitationPage,
    // AddTeamerPage,
    // HotIssPage,
    // OperationManualPage,
    // IssDetailPage,
    // OperationManualDetailPage,
    // MarketPage,
    // OpenBillPage,
    // ProductDetailPage,
    OpenBillPopPage,
    // MyTransactionPage,
    // MyTransactionDetailPage,
    // QrCodePage,
    // StatisticalsPage,
    // StatisticalCustomerPage,
    // StatisticalProductPage,
    // StatisticalReceivablesPage,
    // StatisticalMoneyPage,
    // StatisticalSummaryPage,
    // CreditPage,
    // CreditDetailPage,
    // CustomerPage,
    // CreditSumPage,
    // CreditDetail2Page,
    // ProductListPage,
    // ProductAddPage,
    // ComeOutPage,
    // ComeOutListPage,
    // ArrearsSumPage,
    // ArrearsDetailPage,
    // UnPayPage,
    // UnPayDetailPage,
    // OpeningWallet1Page,
    // OpeningWallet2Page,
    // OpeningWallet3Page,
    // OpeningWallet4Page,
    walletPopPage,
    // AuthenticationPage,
    // RepaymentPage,
    OpenBillPop2Page,
    // SelsetProductPage,
    // ProductAPage,
    // ProductBPage,
    // ProductCPage,
    // ProductDPage,
    // ModifyPhone2Page,
    // TransferMoneyPage,
    // ReceivablesPage,
    // SaveMoneyPage,
    // PutMoneyPage,
    // AddIcPage,
    // IncomePage,
    // SetMoneyPage,
  ],
  imports: [
    BrowserModule,
    AboutUsPageModule,
    ForgetPassword1PageModule,
    ForgetPassword2PageModule,
    Register1PageModule,
    RegisterDetailPageModule,
    FootBarPageModule,
    PersonInfoPageModule,
    WalletPageModule,
    MessageWaitPageModule,
    MessageSetPageModule,
    ModifyPasswordPageModule,
    MyTeamPageModule,
    ModifyPhonePageModule,
    HelpPageModule,
    AppSetupPageModule,
    WeighSetupPageModule,
    PrintingSetupPageModule,
    VoiceSetupPageModule,
    AboutUsPageModule,
    InvitationPageModule,
    AddTeamerPageModule,
    HotIssPageModule,
    OperationManualPageModule,
    IssDetailPageModule,
    OperationManualDetailPageModule,
    MarketPageModule,
    OpenBillPageModule,
    ProductDetailPageModule,
    MyTransactionPageModule,
    MyTransactionDetailPageModule,
    QrCodePageModule,
    StatisticalsPageModule,
    StatisticalCustomerPageModule,
    StatisticalProductPageModule,
    StatisticalReceivablesPageModule,
    StatisticalMoneyPageModule,
    StatisticalSummaryPageModule,
    CreditPageModule,
    CreditDetailPageModule,
    CustomerPageModule,
    CreditSumPageModule,
    CreditDetail2PageModule,
    ProductListPageModule,
    ProductAddPageModule,
    ComeOutPageModule,
    ComeOutListPageModule,
    ArrearsSumPageModule,
    ArrearsDetailPageModule,
    UnPayPageModule,
    UnPayDetailPageModule,
    OpeningWallet1PageModule,
    OpeningWallet2PageModule,
    OpeningWallet3PageModule,
    OpeningWallet4PageModule,
    SignInPageModule,
    AuthenticationPageModule,
    RepaymentPageModule,

    SelsetProductPageModule,
    ProductAPageModule,
    ProductBPageModule,
    ProductCPageModule,
    ProductDPageModule,
    ModifyPhone2PageModule,
    ReceivablesPageModule,
    TransferMoneyPageModule,
    SaveMoneyPageModule,
    PutMoneyPageModule,
    AddIcPageModule,
    IncomePageModule,
    SetMoneyPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages: 'true',

      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    } as IonicConfig),
    LocalPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    ForgetPassword1Page,
    ForgetPassword2Page,
    Register1Page,
    RegisterDetailPage,
    FootBarPage,
    PersonInfoPage,
    WalletPage,
    MessageWaitPage,
    ModifyPasswordPage,
    MyTeamPage,
    ModifyPhonePage,
    MessageSetPage,
    HelpPage,
    AppSetupPage,
    WeighSetupPage,
    PrintingSetupPage,
    VoiceSetupPage,
    AboutUsPage,
    InvitationPage,
    AddTeamerPage,
    HotIssPage,
    OperationManualPage,
    IssDetailPage,
    OperationManualDetailPage,
    MarketPage,
    OpenBillPage,
    ProductDetailPage,
    OpenBillPopPage,
    MyTransactionPage,
    MyTransactionDetailPage,
    QrCodePage,
    StatisticalsPage,
    StatisticalCustomerPage,
    StatisticalProductPage,
    StatisticalReceivablesPage,
    StatisticalMoneyPage,
    StatisticalSummaryPage,
    CreditPage,
    CreditDetailPage,
    CustomerPage,
    CreditSumPage,
    CreditDetail2Page,
    ProductListPage,
    ProductAddPage,
    ComeOutPage,
    ComeOutListPage,
    ArrearsSumPage,
    ArrearsDetailPage,
    UnPayPage,
    UnPayDetailPage,
    OpeningWallet1Page,
    OpeningWallet2Page,
    OpeningWallet3Page,
    OpeningWallet4Page,
    walletPopPage,
    AuthenticationPage,
    RepaymentPage,
    OpenBillPop2Page,
    SelsetProductPage,
    ProductAPage,
    ProductBPage,
    ProductCPage,
    ProductDPage,
    ModifyPhone2Page,
    TransferMoneyPage,
    ReceivablesPage,
    SaveMoneyPage,
    PutMoneyPage,
    AddIcPage,
    IncomePage,
    SetMoneyPage,
    LocalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    LocalProvider,
    StorageProvider,
    ShopProvider,
    CommonProvider,
    Keyboard,
    SocialSharing

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
