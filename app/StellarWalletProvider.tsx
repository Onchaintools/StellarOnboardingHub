'use client'; // Indica que este componente se ejecuta del lado del cliente en Next.js
import { ReactNode } from "react";
import { NetworkDetails, SorobanReactProvider, WalletNetwork } from "stellar-react";
import deployments from './deployments.json'; // Importa la configuración de despliegue de contratos

// Componente Provider que envuelve la aplicación y provee acceso a la red de Stellar
const StellarWalletProvider = ({ children }: { children: ReactNode }) => {

    // Definimos los detalles de la red de prueba (testnet) de Stellar
    // Puedes cambiar estos valores para conectar a otra red si lo necesitas
    const testnetNetworkDetails: NetworkDetails = {
        network: WalletNetwork.TESTNET, // Selecciona la red de prueba de Stellar
        sorobanRpcUrl: 'https://soroban-testnet.stellar.org/', // URL del nodo Soroban para testnet
        horizonRpcUrl: 'https://horizon-testnet.stellar.org' // URL de Horizon para testnet
    }
    return (
        // SorobanReactProvider provee el contexto de Stellar a toda la app
        <SorobanReactProvider
            appName={"Hello World Stellar App"} // Nombre de la app que se muestra en la wallet
            allowedNetworkDetails={[testnetNetworkDetails]} // Lista de redes permitidas (aquí solo testnet)
            activeNetwork={WalletNetwork.TESTNET} // Red activa por defecto
            deployments={deployments} // Información de despliegue de contratos inteligentes
        >
            {/* children representa los componentes hijos que tendrán acceso al contexto de Stellar */}
            {children}
        </SorobanReactProvider>
    )
}
// Exportamos el Provider para usarlo en el layout principal de la app
export default StellarWalletProvider;