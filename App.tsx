import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { ToastProvider } from "@/components/Toast"

import { Profile } from "@/app/Profile"

export default function App() {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar style="light" />
    </ToastProvider>
  )
}
