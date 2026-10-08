import ConceptRibbon from './components/ConceptRibbon'
import HonoraryCountryPage from './pages/HonoraryCountryPage'

// Single-page standalone: concept ribbon + the Honorary Country page, no site
// chrome (owner request 2026-10-08: "no need for the Nav bar").
export default function App() {
  return (
    <>
      <ConceptRibbon />
      <HonoraryCountryPage />
    </>
  )
}
