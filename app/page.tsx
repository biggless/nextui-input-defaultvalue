'use client';
import { useActionState, startTransition } from 'react';
import { handleSubmit } from './actions';
import { Form } from '@nextui-org/form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function Home() {
  const initialState = {input: new FormData(), errors: []}
  const [stateOne, formActionOne] = useActionState(handleSubmit, initialState);
  const [stateTwo, formActionTwo] = useActionState(handleSubmit, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    startTransition( async () => { await formActionTwo(new FormData(e.target)) });
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-8">
        <form action={formActionOne}>
          <input name="name" type="text" defaultValue={stateOne.input.get('name')} />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="mt-8">
        <Form onSubmit={onSubmit}>
          <Input name="name" type="text" defaultValue={stateTwo.input.get('name')} />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  );
}
