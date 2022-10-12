import { AppShell } from '@mantine/core'
import HeaderCustom from '../components/HeaderCustom'
import NavbarCustom from '../components/NavbarCustom'

function MyApp({ Component, pageProps }) {
  return <AppShell
      padding="md"
      navbar={<NavbarCustom />}  
      header={<HeaderCustom/>}   
    >
      <Component {...pageProps} />
      
    </AppShell>
    
}

export default MyApp
