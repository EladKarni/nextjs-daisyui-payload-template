/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* MODIFIED TO HANDLE DEMO MODE AND MISSING DATABASE */
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import React from 'react'

type Args = {
  children: React.ReactNode
}

// Check if admin is disabled
const isAdminDisabled = () => process.env.DEMO_MODE === 'true' || !process.env.DATABASE_URL

const Layout = async ({ children }: Args) => {
  if (isAdminDisabled()) {
    // Return minimal layout when admin is disabled
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }

  // Only import Payload components if admin is enabled
  const config = (await import('@payload-config')).default
  const { handleServerFunctions, RootLayout } = await import('@payloadcms/next/layouts')
  const { importMap } = await import('./admin/importMap.js')

  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}

export default Layout
