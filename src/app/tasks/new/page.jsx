"use client"
import { newTaskAction } from '@/lib/actions';
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from '@heroui/react';
import React from 'react';

const NewTask = () => {
    return (
        <div className='w-1/2  mx-auto mt-6'>
            <h2 className="text-5xl mb-4">Add a New Task</h2>
            <div>
                <Form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                         minLength={5}
                         validate={(value) => {
                            if(value.length < 5){
                                return "Title must be at least 5 characters"
                            }
                         }}
                        className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your task title" />
                         <FieldError />
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your task description" />
                    </TextField>
                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="heigh" textValue="Heigh">
                                    Heigh
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField className="w-full" name="assignTo">
                        <Label>Assign To</Label>
                        <Input placeholder="Task assing to" />
                    </TextField>
                    <div className='flex gap-2'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button slot="close" type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default NewTask;