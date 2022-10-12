import React from 'react'
import { Center, TextInput, Space, Text, Title, Button, Box, Group, Select, Divider,Grid,Tabs } from '@mantine/core'
import {useForm} from '@mantine/form'
import { factoresActividad } from '../const/factores'
import PorcentajeMacro from './PorcentajeMacro'
import KilosMacro from './KilosMacro'


const HarrisBenedict = () => {
     const form= useForm({
         initialValues: {
             peso: '',
             altura: '',
             edad: '',
             genero: '',
             formula: 0.0,
             factor:'',
             get: 0.0,
             fa: 0.0
         }
     })

     const Calcular = () => {
         const peso = form.values.peso;
         const altura = form.values.altura;
         const edad = form.values.edad;
         const genero=form.values.genero;
        
         let formula=0
         if(genero=='masculino'){
           formula= (66.5 + (13.75*parseFloat(peso)) + (5*100*parseFloat(altura) ) - (6.78*parseFloat(edad)))
         }else{
           formula= (655.1 + (9.56*parseFloat(peso)) + (1.85*100*parseFloat(altura)) - (4.68*parseFloat(edad)))
         }
         const fa= (factoresActividad[form.values.factor] * formula)
         const get=  fa + (formula*0.10)
        
         form.setValues({
           formula: formula.toFixed(2),
           get: get.toFixed(2),
           fa: fa
         })
       }

  return (

     <Grid columns={24}>
     <Grid.Col span={12}>
     <Box sx={{ maxWidth: 300 }} mx="auto">
         <Text size="md" color="purple" align="center">Harris-Benedict</Text>
         <Divider my="sm" />
         <Space h="xs" />

       <form onSubmit={form.onSubmit((values) => Calcular())}>
         <TextInput
           label="Peso"
           placeholder="Ingresa tu peso"
           {...form.getInputProps('peso')}
         />

         <TextInput
           label="Altura"
           placeholder="Ingresa tu altura"
           {...form.getInputProps('altura')}
         />

         <TextInput
           label="Edad"
           placeholder="Ingresa tu edad"
           {...form.getInputProps('edad')}
         />
          <Space h="md" />
          <Select
           label="Genero"
           placeholder="Selecciona un genero"
           data={[
             { value: 'femenino', label: 'Femenino'  },
             { value: 'masculino', label: 'Masculino' },
           ]}
           {...form.getInputProps('genero')}
         />
         <Select
           label="Factores de Actividad"
           placeholder="Seleccione un factor"
           data={[
             { value: 'sedentario', label: 'Sedentario'  },
             { value: 'ligero', label: 'Ligero' },
             { value: 'moderado', label: 'Moderado'  },
             { value: 'activo', label: 'Activo' },
             { value: 'vigoroso', label: 'Vigoroso'},
           ]}
           {...form.getInputProps('factor')}
         />

         <Select
           label="Formula"
           placeholder="Seleccione una formula"
           data={[
             { value: 'harrisBenedict', label: 'Harris Benedict'  },
             { value: 'oms', label: 'OMS' },
             { value: 'owen', label: 'Owen'  },
             { value: 'valencia', label: 'Valencia' },
            { value: 'mifflin', label: 'Mifflin St-Jeor'},
           ]}
           {...form.getInputProps('formulas')}
         />

         <Group position="center" mt="md">
         <Button variant="light" color="grape" compact type="submit">
            Calcular
         </Button>
         </Group>

     </form>

       <Text>GEB:{form.values.formula===0?'':form.values.formula}</Text>
       <Text>FA:{form.values.fa===0?'':form.values.fa}</Text>
       <Text>GET:{form.values.get===0?'':form.values.get}</Text>
      
     </Box>
     </Grid.Col>
     <Grid.Col span={6}>
     <Box sx={{ maxWidth: 300 }} mx="auto">
         <Text size="md" color="purple" align="center">Calculo Macronutrientes</Text>
         <Divider my="sm" />
         <Space h="xs" />

         {/* <Tabs  defaultValue="macro">
                     <Tabs.List>
                         <Tabs.Tab value="porcentaje">Porcentaje</Tabs.Tab>
                         <Tabs.Tab value="kilos">Gr/Kg</Tabs.Tab>
                     </Tabs.List>

                     <Tabs.Panel value="porcentaje" pt="xs">
                         <PorcentajeMacro></PorcentajeMacro>
                     </Tabs.Panel>           
                     <Tabs.Panel value="kilos" pt="xs">
                          <KilosMacro></KilosMacro>
                     </Tabs.Panel>
        </Tabs>     */}
     </Box>
     </Grid.Col>
     </Grid>
  )
}

export default HarrisBenedict