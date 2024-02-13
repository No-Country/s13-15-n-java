import GardenerTest from "@/components/GardenerTest";
import { store } from '../store/store'
import { Provider } from 'react-redux'
export default function Pagina() {

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <GardenerTest></GardenerTest>
      </main>
    </Provider>
  );
}