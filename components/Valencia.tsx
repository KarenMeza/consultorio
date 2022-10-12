import React from 'react'
import { Center, TextInput,Button,Space,Divider,Text,Box,Group,Select} from '@mantine/core'
import {useForm} from '@mantine/form'


const Valencia = () => {
    const form = useForm({
        initialValues:{
            peso: '',
            genero: '',
            factor:'',
            get:0.0,
            fa: 0.0,
            formula: 0.0,
            edad: '',
        }
    })

    const Calcular = () => {
        const peso = form.values.peso;
        const genero=form.values.genero;
        const edad=form.values.edad;
        let formula=0
        
    }
      
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
        <Text size="md" color="purple" align="center">Valencia</Text>
        <Divider my="sm" />
        <Space h="xs" />
      <form onSubmit={form.onSubmit((values) => Calcular())}>
        <TextInput
          label="Peso"
          placeholder="Ingresa tu peso"
          {...form.getInputProps('peso')}
        />
        <TextInput
          label="Edad"
          placeholder="Ingresa tu edad"
          {...form.getInputProps('edad')}
        />

        <Space h="md" />
        <Select
          label="Genero"
          placeholder="Selecciona tu genero"
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
        <Button variant="light" color="grape" compact type="submit">
           Calcular
        </Button>
        </Group>

      </form>
      
    </Box>
  )
}

export default Valencia