import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

export class WebBarcodeScanner extends BarcodeScanner {
    scan(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
        return new Promise(resolve => {
            resolve({
                format: 'QR_CODE',
                cancelled: false,
                text: 'http://www.baidu.com'
            });
        })
    }
}