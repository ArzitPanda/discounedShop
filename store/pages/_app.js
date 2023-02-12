import '@/styles/globals.css'
import store from '../store'
import { Provider } from 'react-redux'
import CartProvider from '@/components/CartProvider'
export default function App({ Component, pageProps }) {
  return (<Provider store={store}>
  <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
  </Provider>)
}
