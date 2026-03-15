import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function WorkInProgress() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-[420px] bg-amber-100 text-center">
        <CardHeader>
          <Badge className="mx-auto w-fit">Work in Progress</Badge>
          <CardTitle className="text-2xl mt-2">
            This page is under development
          </CardTitle>
        </CardHeader>

        <CardContent className="text-foreground">
          I'm currently building this section. Check back soon for updates...🚀
        </CardContent>
      </Card>
    </div>
  )
}
