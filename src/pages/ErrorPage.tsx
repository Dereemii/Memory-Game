import { useRouteError } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const ErrorPage = () => {
  const error: unknown = useRouteError()
  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {(error as Error)?.message ||
              (error as { statusText?: string })?.statusText}
          </i>
        </p>
      </div>
    </Layout>
  )
}
