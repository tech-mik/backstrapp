import Page from '@/components/layout/Page'
import SortFilterTabs from '@/components/SortFilterTabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FloppyDisk, Trash } from '@phosphor-icons/react/dist/ssr'
import { filter } from './filters'

interface ISearchParams {
  filter: string
}

const buttons = (
  <>
    <Button icon={FloppyDisk} variant='default'>
      Save
    </Button>
    <Button icon={Trash} variant='outline'>
      Delete
    </Button>
  </>
)

const filters = <SortFilterTabs filters={filter} />

export default function Home({
  searchParams,
}: {
  searchParams: ISearchParams
}) {
  return (
    <Page
      title='Dashboard'
      description='General overview with all recent activities and statistics.'
      filters={filters}
      buttons={buttons}>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          {(searchParams.filter !== 'all' && searchParams.filter) ||
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, animi voluptate quia adipisci dolore numquam neque nam? Obcaecati fugiat iste dolor itaque dolorum laboriosam. Nobis doloribus odit veritatis veniam minus. Earum, porro! Nulla, nostrum, repudiandae unde doloribus vero odio quae sit voluptatibus suscipit possimus blanditiis animi debitis perspiciatis eius expedita dolorum iure? Quibusdam reprehenderit doloribus sed voluptatibus illo. Fugit labore vel ut ex ducimus soluta! Ullam aspernatur eum eligendi magnam nulla hic dolorum error recusandae ducimus corrupti deserunt explicabo aliquid maxime, id laborum tempore sunt aperiam asperiores vitae voluptates. Laborum nulla amet quis totam itaque, delectus architecto nostrum obcaecati error!'}
        </CardContent>
      </Card>
    </Page>
  )
}
