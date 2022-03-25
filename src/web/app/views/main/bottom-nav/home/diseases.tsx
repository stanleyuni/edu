import * as React from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';

interface Item {
  name: string;
  risk: string;
}

const MyComponent = ({ theme }) => {
  const items: Item[] = [
    {
      'name': 'Type 1 diabetes',
      'risk': 'High'
    },
    {
      'name': 'CYP3A41 deficiency',
      'risk': 'High'
    },
    {
      'name': 'Cystic fibroris',
      'risk': 'Medium'
    },
    {
      'name': 'Thalassemia',
      'risk': 'Low'
    },
    {
      'name': 'Huntingtons disease',
      'risk': 'Low'
    },
    {
      'name': 'Angleman syndrome',
      'risk': 'Low'
    },
    {
      'name': 'Tay-sachs disease',
      'risk': 'Medium-Low'
    }
  ];
  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(optionsPerPage[0]);
  const [pages, setPages] = React.useState<number>(items.length / itemsPerPage);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={{ padding: 10 }}>
      <DataTable>
        <DataTable.Header theme={theme}>
          <DataTable.Title theme={theme}>Genetic disease</DataTable.Title>
          <DataTable.Title numeric theme={theme}>Risk factor</DataTable.Title>
        </DataTable.Header>

        {items.map((item) => (
          <DataTable.Row theme={theme} key={item.name}>
            <DataTable.Cell theme={theme}>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric theme={theme}>{item.risk}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={pages}
          onPageChange={(page) => setPage(page)}
          numberOfItemsPerPage={3}
          numberOfItemsPerPageList={optionsPerPage}
          theme={theme}
        />
      </DataTable>
    </View>
  );
}

export default MyComponent;