import { Route } from "@angular/router";
import { ChatWorkspaceComponent } from "./chat-workspace/chat-workspace.component";
import { ChatsPageComponent } from "./chats.component";

console.log(123)
export const chatsRoutes: Route[] = [
  {
    path: '',
    component: ChatsPageComponent,
    children: [
      {path: ':id', component: ChatWorkspaceComponent},
    ]
  }
]
