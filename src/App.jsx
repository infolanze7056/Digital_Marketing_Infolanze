
import { usePWA } from './hooks/usePWA';
import Layout from './components/Layout/Layout';

export default function App() {
  const { isInstallable, installApp, isOnline } = usePWA();

  return (
    <Layout>
      cdsf
      {/* <div className="flex flex-col justify-center items-center min-h-[70vh] text-center p-8">
        <h1 className="text-4xl mb-2 font-bold">
          Welcome to <span className="text-blue-600">Digital_Marketing_Infolanze</span> 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your PWA is ready. Start building amazing things!
        </p>
        <div className="flex flex-col gap-4 items-center">
          <div className="px-4 py-2 bg-blue-600 text-white rounded-lg text-base">
            📱 PWA Enabled
          </div>
          <div className={`px-4 py-2 rounded-lg text-base text-white ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}> 
            {isOnline ? "🟢 Online" : "🔴 Offline"}
          </div>
          {isInstallable && (
            <button
              onClick={installApp}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition"
            >
              📲 Install App
            </button>
          )}
        </div>
      </div> */}
    </Layout>
  );
}