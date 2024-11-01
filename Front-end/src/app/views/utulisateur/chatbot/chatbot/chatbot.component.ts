import { Component } from '@angular/core';
import { ChatbotService } from '../../../client/chatbot.service';


export interface Message {
  from: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  question: string = '';
  response: string = '';
  messages: Message[] = [];

  constructor(private chatbotService: ChatbotService) { }

  sendMessage(): void {
    if (this.question.trim() === '') {
      return;
    }

    this.chatbotService.sendMessage(this.question).subscribe((data: any) => {
      this.response = data.response;
      this.messages.push({ from: 'user', text: this.question });
      this.messages.push({ from: 'bot', text: data.response });
    });

    this.question = '';
  }
}


