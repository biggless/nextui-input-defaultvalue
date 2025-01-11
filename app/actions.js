'use server';

export async function handleSubmit(_prevState, formData) {
  console.log('formData', formData.get('name'));
  return {
    input: formData,
    errors: [],
  }
}
