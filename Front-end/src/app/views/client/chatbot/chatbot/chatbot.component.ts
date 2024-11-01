import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  question: string = '';
  response: string = '';
  messages: { sender: string, text: string }[] = [];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    // Message par défaut au chargement du composant
    this.messages.push({ sender: 'bot', text: 'Salut, comment puis-je vous aider ?' });
  }

  sendMessage(): void {
    if (this.question.trim() === '') {
      return;
    }

    this.messages.push({ sender: 'user', text: this.question });

    this.chatbotService.sendMessage(this.question).subscribe((data: any) => {
      this.response = data.response;
      this.messages.push({ sender: 'bot', text: this.response });
    });

    this.question = '';
  }
}
