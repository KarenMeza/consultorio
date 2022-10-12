import React from 'react'
import {useForm} from '@mantine/form'
import { Box, TextInput,Group,Button } from '@mantine/core'


const alimentos = () => {
    const form = useForm({
        initialValues:{
            alimento: '',
        }
    })  


  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
    <form onSubmit={form.onSubmit((values) => Calcular())}>
        <TextInput
          label="Alimento"
          placeholder="Ingresa un alimento"
          {...form.getInputProps('alimento')}
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
export default alimentos