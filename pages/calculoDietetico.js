import React from 'react'
import { Center, TextInput, Space, Text, Title, Button, Box, Group, Select, Divider,Grid,Tabs, Stack } from '@mantine/core'
import {useForm} from '@mantine/form'
import { factoresActividad } from '../const/factores'
import PorcentajeMacro from '../components/PorcentajeMacro'
import KilosMacro from '../components/KilosMacro'


const calculoDietetico = () => {
    const form= useForm({
        initialValues: {
            peso: '',
            altura: '',
            edad: '',
            genero: '',
            formula: '',
            factor:'',
            get: 0.0,
            fa: 0.0,
        }
    })

    const calcular = () => {
        const peso = parseFloat(form.values.peso);
        const altura = parseFloat(form.values.altura);
        const edad = parseFloat(form.values.edad);
        const genero=form.values.genero;
       
        let get=0
        let geb=0
        switch (form.values.formula){
            case 'harrisBenedict': 
                if(genero=='masculino'){
                    geb= (66.5 + (13.75*peso) + (5*100*altura ) - (6.78*edad))
                }else{
                    geb= (655.1 + (9.56*peso) + (1.85*100*altura) - (4.68*edad))
                }
                get= (factoresActividad[form.values.factor] * geb) + (geb*0.10)
              break;
            case 'owen': 
                if(genero=='masculino'){
                    geb= ((10.2*peso) + 879)
                }else{
                    geb= ((7.18*peso) + 795)
                }
                get = (factoresActividad[form.values.factor] * geb)
             break;
            case 'oms':
                if(genero=='masculino'){
                    geb= ((11.3*peso) + (16*altura) + 901)
                }else{
                    geb= ((8.7*peso) - (25*altura) + 865)
                }
              get= (factoresActividad[form.values.factor] *   geb)            
            break;
            case 'mifflin':
                if(genero=='masculino'){
                    geb= ((10*peso) + (6.25*100*altura ) - (5*edad) + 5)
                }else{
                    geb= ((10*peso) + (6.25*100*altura ) - (5*edad) - 161)
                }
              get= (factoresActividad[form.values.factor] *   geb)
              break;
            case 'valencia':
              if(genero=='masculino'){
                if(edad>=18 && edad<=29) geb=(13.37 * peso)+747
                else if (edad<=59) geb=(13.08 * peso) + 693
                else geb=(14.21 * peso) + 429
              }else{
                if(edad>=18 && edad<=29) geb=(11.02 * peso)+679
                else if (edad<=59) geb=(10.92 * peso) + 677
                else geb=(10.98 * peso) + 520                
              }
              get = (factoresActividad[form.values.factor] * geb)
              

            
        }
       
        form.setValues({
          get: get
        })
      }
return (
<Group spacing="lg" position="center">
    <Box sx={{ maxWidth: 400, minWidth:400 }}>
         <Text size="md" color="purple" align="center">Informacion</Text>
         <Divider my="sm" />
         <Space h="xs" />

       <form onSubmit={form.onSubmit((values) => calcular())}>
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
           {...form.getInputProps('formula')}
         />

         <Group position="center" mt="md">
         <Button variant="light" color="grape" compact type="submit">
            Calcular
         </Button>
         </Group>
         {/* <Text>GEB:{form.values.formula===0?'':form.values.formula}</Text>
       <Text>FA:{form.values.fa===0?'':form.values.fa}</Text>
       <Text>GET:{form.values.get===0?'':form.values.get}</Text> */}
     </form>
    </Box> 

    <Stack>
    <Text size="md" color="purple" align="center">Macronutrientes</Text>
         <Space h="xs" />
        <Tabs defaultValue="porcentaje">
            <Tabs.List>
                <Tabs.Tab value="porcentaje"  >Porcentaje</Tabs.Tab>
                <Tabs.Tab value="kilos"  >G/Kg</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="porcentaje" pt="xs">
                <PorcentajeMacro kcal={form.values.get} pesoMacro={form.values.peso}/>
            </Tabs.Panel>

            <Tabs.Panel value="kilos" pt="xs">
                <KilosMacro kcal={form.values.get} pesoMacro={form.values.peso} />
            </Tabs.Panel>
        </Tabs>
    </Stack>
</Group>
    )
}

export default calculoDietetico