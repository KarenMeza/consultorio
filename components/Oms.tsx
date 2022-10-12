import React from 'react'
import { Center, TextInput, Divider,Button,Box,Group,Space,Text,Select} from '@mantine/core'
import {useForm} from '@mantine/form'
import { factoresActividad } from '../const/factores'

const Oms = () => {
    const form = useForm({
        initialValues:{
            peso: '',
            altura: '',
            genero:'',
            factor:'',
            get:0.0,
            fa: 0.0,
            formula: 0.0
        },
    })
    const Calcular = () => {
        const peso = form.values.peso;
        const altura = form.values.altura;
        const genero = form.values.genero;
        console.log(genero);

        let formula=0
        if(genero=='masculino'){
          formula= ((11.3*parseFloat(peso)) + (16*parseFloat(altura)) + 901)
        }else{
          formula= ((8.7*parseFloat(peso)) - (25*parseFloat(altura)) + 865)
        }
        const fa= (factoresActividad[form.values.factor] * formula)
        const get= fa;


        form.setValues({
          formula: formula.toFixed(2),
          fa: fa,
          get:get.toFixed(2)
        })
    }
      
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
        <Text size="md" color="purple" align="center">Oms</Text>
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
        <Group position="center" mt="md">
        <Button  variant="light" color="grape" compact type="submit">
           Calcular
        </Button>
        </Group>

      </form>
      
      <Text>GEB:{form.values.formula===0?'':form.values.formula}</Text>
      <Text>FA:{form.values.fa===0?'':form.values.fa}</Text>
      <Text>GET:{form.values.get===0?'':form.values.get}</Text>
    </Box>
  )
}


export default Oms