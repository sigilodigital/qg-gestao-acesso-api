import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { GlobalService } from 'src/shared/services/global.service';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginSistemaStrategy extends PassportStrategy(Strategy, "system-strategy") {
    constructor(private moduleRef: ModuleRef, private readonly authService: AuthService) {
        super({ passReqToCallback: true, usernameField: 'username', passwordField: 'password' });
    }

    async validate(request: Request, username: string, password: string): Promise<any> {

        // GlobalService.enableDebugModeHeader = JSON.parse(request.headers['debug-mode'] || 'false');

        const user = await this.authService.sistemaValidar({ username, password });
        return user;
    }
} 
