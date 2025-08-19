<script setup>
import { MailCheck, MailWarning } from "lucide-vue-next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
</script>
<template>
  <Tabs default-value="read">
    <TabsList class="flex justify-end align-end">
  
        <TabsTrigger value="read"
          ><MailCheck /> Read
        </TabsTrigger>
        <TabsTrigger value="unread"
          ><MailWarning /> UnRead
        </TabsTrigger>
    
    </TabsList>
    

    <TabsContent value="read">
      <Card>
        <CardHeader>
          <CardTitle>unknown msg</CardTitle>
          <CardDescription
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet illo est voluptates nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>official msg</CardTitle>
          <CardDescription
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet illo est voluptates nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>unofficial msg</CardTitle>
          <CardDescription
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet illo est voluptates nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>important msg</CardTitle>
          <CardDescription
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet illo est voluptates nesciunt.
          </CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
    <TabsContent value="unread">
      <Card>
        <CardHeader>
          <CardTitle>UnReaded Messages</CardTitle>
          <CardDescription
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet illo est voluptates nesciunt. Nam quidem quo ipsa obcaecati
            ipsam voluptatem harum nesciunt voluptas dicta ?</CardDescription
          >
        </CardHeader>
      </Card>
    </TabsContent>
  </Tabs>
</template>
