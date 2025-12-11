/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* MODIFIED TO HANDLE DEMO MODE AND MISSING DATABASE */
import type { Metadata } from 'next'
import Link from 'next/link'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

// Check if admin is disabled
const isAdminDisabled = () => process.env.DEMO_MODE === 'true' || !process.env.DATABASE_URL

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> => {
  if (isAdminDisabled()) {
    return {
      title: 'Admin Panel Disabled',
      description: 'The admin panel is currently disabled'
    }
  }

  const config = (await import('@payload-config')).default
  const { generatePageMetadata } = await import('@payloadcms/next/views')
  return generatePageMetadata({ config, params, searchParams })
}

const Page = async ({ params, searchParams }: Args) => {
  if (isAdminDisabled()) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '700px',
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
            ⚠️ Admin Panel Unavailable
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The admin panel is currently disabled because the database is not connected.
          </p>

          {process.env.DEMO_MODE === 'true' && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fef3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
              <p style={{ color: '#856404', margin: 0 }}>
                <strong>🎭 DEMO MODE</strong> is enabled. The site is using fallback data.
              </p>
            </div>
          )}

          {!process.env.DATABASE_URL && !process.env.DEMO_MODE && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8d7da', borderRadius: '8px', border: '1px solid #f5c6cb' }}>
              <p style={{ color: '#721c24', margin: 0 }}>
                <strong>❌ DATABASE_URL</strong> environment variable is not set.
              </p>
            </div>
          )}

          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#e9ecef', borderRadius: '8px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', marginTop: 0 }}>
              📋 To enable the admin panel:
            </h2>
            <ol style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '2', margin: 0 }}>
              <li>Install Docker if not already installed</li>
              <li>Start MongoDB: <code style={{ backgroundColor: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #dee2e6', fontFamily: 'monospace' }}>yarn db:start</code></li>
              <li>Remove <code style={{ backgroundColor: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #dee2e6', fontFamily: 'monospace' }}>DEMO_MODE</code> from environment</li>
              <li>Restart the dev server: <code style={{ backgroundColor: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #dee2e6', fontFamily: 'monospace' }}>yarn dev</code></li>
            </ol>
          </div>

          <Link href="/" style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            backgroundColor: '#0693e3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}>
            ← Return to Homepage
          </Link>
        </div>
      </div>
    )
  }

  // Admin is enabled, load Payload components
  const config = (await import('@payload-config')).default
  const { RootPage } = await import('@payloadcms/next/views')
  const { importMap } = await import('../importMap')

  return RootPage({ config, params, searchParams, importMap })
}

export default Page
