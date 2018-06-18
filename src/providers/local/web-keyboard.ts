import { Keyboard } from '@ionic-native/keyboard';
export class WebKeybord extends Keyboard {
    /**Prevents the native UIScrollView from moving when an input is focused. */
    disableScroll(disable: boolean) {
        alert('模拟禁用键盘')
    }
}