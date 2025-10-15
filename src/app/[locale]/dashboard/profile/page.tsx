import UserLayout from '@/app/[locale]/layouts/user-layout'

export default function ProfilePage() {
  return (
    <UserLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-foreground">Profile Page</h1>
      </div>
    </UserLayout>
  )
}
