import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ClassesModule } from './classes/classes.module';
import { LessonsModule } from './lessons/lessons.module';
import { LessonMatersModule } from './lesson-maters/lesson-maters.module';
import { SessionsModule } from './sessions/sessions.module';
import { ModulesModule } from './modules/modules.module';
import { ModuleScoresModule } from './module-scores/module-scores.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { LessonAccessRolesModule } from './lesson-access-roles/lesson-access-roles.module';
import { AttendancesModule } from './attendances/attendances.module';
import { UserDailyActiveLogsModule } from './user-daily-active-logs/user-daily-active-logs.module';
import { TeacherDetailsModule } from './teacher-details/teacher-details.module';
import { StudentDetailsModule } from './student-details/student-details.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { SequelizeMetaModule } from './sequelize-meta/sequelize-meta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    RolesModule,
    ClassesModule,
    LessonsModule,
    LessonMatersModule,
    SessionsModule,
    ModulesModule,
    ModuleScoresModule,
    QuizzesModule,
    LessonAccessRolesModule,
    AttendancesModule,
    UserDailyActiveLogsModule,
    TeacherDetailsModule,
    StudentDetailsModule,
    ConfigurationsModule,
    SequelizeMetaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
